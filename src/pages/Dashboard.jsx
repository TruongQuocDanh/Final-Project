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
import BookDetailsModal from "../components/BookDetails/BookDetailsModal"; // 🆕 Import modal

const { Header, Content } = Layout;

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false); // 🆕 For details modal
  const [selectedBook, setSelectedBook] = useState(null); // 🆕 Selected book data
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [appliedFilters, setAppliedFilters] = useState(null);

  const isSearchingOrFiltered =
    searchTerm.trim() !== "" || appliedFilters !== null;
  const booksPerPage = isSearchingOrFiltered ? 20 : 8;

  // 🟢 Fake data load
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setBooks([
        {
          id: 1,
          title: "Cooking Made Easy",
          author: "Emily Clark",
          category: "Learning",
          price: 45,
          quantity: 10,
          description: "Simple recipes for busy people.",
          image: "https://placehold.co/200x250",
          status: "In Stock",
          createdAt: "2025-11-01",
        },
        {
          id: 2,
          title: "Mystery of the Lost Island",
          author: "Jane Smith",
          category: "Thriller",
          price: 60,
          quantity: 0,
          description: "A thrilling journey full of mysteries.",
          image: "https://placehold.co/200x250",
          status: "Out of Stock",
          createdAt: "2025-10-25",
        },
        {
          id: 3,
          title: "The Hidden Kingdom",
          author: "Laura Hill",
          category: "Fantasy",
          price: 80,
          quantity: 5,
          description: "A magical world awaits beyond the mist.",
          image: "https://placehold.co/200x250",
          status: "Inactive",
          createdAt: "2025-09-15",
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  // 🟢 Add new book
  const handleAddBook = (newBook) => {
    const id = books.length + 1;
    const bookData = {
      id,
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
      price: newBook.price || 0,
      quantity: newBook.quantity || 0,
      description: newBook.description || "",
      image: newBook.image?.thumbUrl || "https://placehold.co/200x250",
      status: "In Stock",
      createdAt: new Date().toISOString(),
    };
    setBooks((prev) => [bookData, ...prev]);
    setIsModalOpen(false);
    message.success("Book added successfully!");
  };

  // 🟢 View details
  const handleViewBook = (book) => {
    setSelectedBook(book);
    setIsDetailsOpen(true);
  };

  // 🟢 Save (edit)
  const handleUpdateBook = (updatedBook) => {
    setBooks((prev) =>
      prev.map((b) => (b.id === updatedBook.id ? updatedBook : b))
    );
    setSelectedBook(updatedBook);
  };

  // 🟢 Delete
  const handleDeleteBook = (bookToDelete) => {
    setBooks((prev) => prev.filter((b) => b.id !== bookToDelete.id));
    setIsDetailsOpen(false);
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

  // 🟢 Search logic
  const filteredBooks = books.filter((book) => {
    const keyword = searchTerm.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(keyword) ||
      book.author.toLowerCase().includes(keyword);

    let matchesCategory = true;
    let matchesStatus = true;
    let matchesAuthor = true;
    let matchesPrice = true;

    if (appliedFilters) {
      const { category, status, author, minPrice, maxPrice } = appliedFilters;
      if (category?.length)
        matchesCategory = category.includes(book.category);
      if (status?.length) matchesStatus = status.includes(book.status);
      if (author) matchesAuthor = book.author === author;
      if (minPrice !== undefined && maxPrice !== undefined)
        matchesPrice =
          book.price >= minPrice && book.price <= maxPrice;
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
              {searchTerm
                ? "No books or authors found."
                : appliedFilters
                ? "No books match the current filters."
                : "There are currently no books."}
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
                  total={filteredBooks.length}
                  pageSize={booksPerPage}
                  onChange={(page) => setCurrentPage(page)}
                  showSizeChanger={false}
                />
              </div>
            </>
          )}
        </Content>

        {/* Add Book Modal */}
        <AddBookModal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onSave={handleAddBook}
        />

        {/* 🆕 Book Details Modal */}
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
