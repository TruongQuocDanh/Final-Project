import { useState, useEffect } from "react";
import {
  Layout,
  Button,
  Space,
  message,
  Pagination,
  Spin,
} from "antd";
import {
  PlusOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Sidebar from "../components/SideBar";
import BookList from "../components/BookList";
import AddBookModal from "../components/AddNewBook/AddBookModal";
import SearchFilterBar from "../components/SearchFilterBar";
import BookDetailsModal from "../components/BookDetails/BookDetailsModal";

import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../api/bookApi";

const { Header, Content } = Layout;

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [appliedFilters, setAppliedFilters] = useState(null);

  const booksPerPage = 8;

  // 🟢 Load all books từ backend (chỉ gọi 1 lần)
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const data = await getBooks();
      setBooks(data);
    } catch (err) {
      console.error(err);
      message.error("Failed to load books from server!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // 🟢 Add new book
  const handleAddBook = async (formData) => {
    try {
      await createBook(formData);
      message.success("Book added successfully!");
      setIsModalOpen(false);
      fetchBooks();
    } catch (err) {
      console.error(err);
      message.error("Failed to add book!");
    }
  };

  // 🟢 View details
  const handleViewBook = (book) => {
    setSelectedBook(book);
    setIsDetailsOpen(true);
  };

  // 🟢 Update book
  const handleUpdateBook = async (updatedBook) => {
    try {
      const formData = new FormData();
      formData.append("title", updatedBook.title);
      formData.append("description", updatedBook.description || "");
      formData.append("price", updatedBook.price || 0);
      formData.append("quantity", updatedBook.quantity || 0);
      formData.append("status", updatedBook.status || "In Stock");
      formData.append("author_id", updatedBook.author_id || "");
      formData.append("category_id", updatedBook.category_id || "");
      if (updatedBook.imageFile) formData.append("image", updatedBook.imageFile);

      await updateBook(updatedBook.id, formData);
      message.success("Book updated successfully!");
      fetchBooks();
    } catch (err) {
      message.error("Failed to update book!");
    }
  };

  // 🟢 Delete book
  const handleDeleteBook = async (bookToDelete) => {
    try {
      await deleteBook(bookToDelete.id);
      message.success("Book deleted successfully!");
      setIsDetailsOpen(false);
      fetchBooks();
    } catch (err) {
      message.error("Failed to delete book!");
    }
  };

  // 🟢 Apply & Clear Filters
  const handleFilterApply = (filters) => {
    setAppliedFilters(filters);
    setCurrentPage(1);
  };

  const handleFilterClear = () => {
    setAppliedFilters(null);
    setCurrentPage(1);
  };

  // 🟢 Frontend filtering + search
  const filteredBooks = books.filter((book) => {
    const keyword = searchTerm.toLowerCase();

    const matchesSearch =
      book.title?.toLowerCase().includes(keyword) ||
      book.author_name?.toLowerCase().includes(keyword) ||
      book.category_name?.toLowerCase().includes(keyword);

    let matchesCategory = true;
    let matchesStatus = true;
    let matchesAuthor = true;
    let matchesPrice = true;

    if (appliedFilters) {
      const { category_ids, status, author_id, minPrice, maxPrice } = appliedFilters;

      if (category_ids?.length)
        matchesCategory = category_ids.includes(book.category_id);
      if (status?.length)
        matchesStatus = status.includes(book.status);
      if (author_id)
        matchesAuthor = book.author_id === author_id;
      if (minPrice !== undefined && maxPrice !== undefined)
        matchesPrice = book.price >= minPrice && book.price <= maxPrice;
    }

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus &&
      matchesAuthor &&
      matchesPrice
    );
  });

  const totalBooks = filteredBooks.length;
  const startIndex = (currentPage - 1) * booksPerPage;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + booksPerPage);

  return (
    <Layout style={{ minHeight: "100vh", background: "#eaf2ff" }}>
      <Sidebar collapsed={collapsed} />

      <Layout style={{ background: "#eaf2ff" }}>
        {/* Header */}
        <Header
          style={{
            background: "#eaf2ff",
            padding: "24px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Space align="center">
            <Button
              type="text"
              icon={collapsed ? <MenuOutlined /> : <CloseOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "20px",
                color: "#000",
                marginRight: 10,
                marginTop: 20,
              }}
            />
            <h1 style={{ fontSize: "22px", fontWeight: 700, margin: 0 }}>
              List of Books
            </h1>
          </Space>

          <Space size="middle">
            <SearchFilterBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onSearchSubmit={() => setCurrentPage(1)}
              onFilterApply={handleFilterApply}
              onFilterClear={handleFilterClear}
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              style={{ background: "#0056d2" }}
              onClick={() => setIsModalOpen(true)}
            >
              Add Books
            </Button>
          </Space>
        </Header>

        {/* Content */}
        <Content style={{ padding: "0 40px 40px", minHeight: "70vh" }}>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
              }}
            >
              <Spin size="large" tip="Loading books..." />
            </div>
          ) : filteredBooks.length === 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
                fontSize: "20px",
                color: "#666",
                fontWeight: 500,
              }}
            >
              No books found.
            </div>
          ) : (
            <>
              <BookList books={currentBooks} onViewBook={handleViewBook} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 30,
                }}
              >
                <Pagination
                  current={currentPage}
                  total={totalBooks}
                  pageSize={booksPerPage}
                  onChange={(page) => setCurrentPage(page)}
                  showSizeChanger={false}
                />
              </div>
            </>
          )}
        </Content>

        {/* Modals */}
        <AddBookModal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onSave={handleAddBook}
        />

        <BookDetailsModal
          open={isDetailsOpen}
          onCancel={() => setIsDetailsOpen(false)}
          book={selectedBook}
          onSave={handleUpdateBook}
          onDelete={handleDeleteBook}
        />
      </Layout>
    </Layout>
  );
}
