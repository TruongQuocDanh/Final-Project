import { useEffect, useState } from "react";
import {
  Layout, Button, Input, Select, Space, message,
  Pagination, Spin,
} from "antd";
import {
  PlusOutlined, SearchOutlined, FilterOutlined,
  MenuOutlined, CloseOutlined,
} from "@ant-design/icons";
import Sidebar from "../components/SideBar";
import BookList from "../components/BookList";
import AddBookModal from "../components/AddBookModal";
import BookDetailsModal from "../components/BookDetailsModal";
import { fetchBooks, createBook } from "../utils/api";

const { Header, Content } = Layout;
const { Option } = Select;

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [details, setDetails] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalBooks, setTotalBooks] = useState(0);

  const booksPerPage = 8;
  const API_HOST = "http://localhost:5000"; // để build URL ảnh

  // 🟢 Load books from backend
  useEffect(() => {
    let ignore = false;

    async function loadBooks() {
      setLoading(true);
      try {
        const res = await fetchBooks(currentPage, booksPerPage, "date_added", "DESC");
        if (!ignore && res) {
          const list = (res.data || []).map((book) => ({
            ...book,
            image: book.cover_image
              ? `${API_HOST}${book.cover_image.startsWith("/") ? book.cover_image : "/" + book.cover_image}`
              : "https://placehold.co/200x250",
          }));
          setBooks(list);
          setTotalBooks(res.total || 0);
        }
      } catch (err) {
        console.error(err);
        message.error("Unable to load book list.");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadBooks();
    return () => { ignore = true; };
  }, [currentPage]);

  // 🟢 Add new book
  const handleAddBook = async (formValues) => {
    try {
      const saved = await createBook(formValues);
      message.success("Book added successfully!");

      if (saved && saved.id) {
        const imageUrl = saved.cover_image
          ? `${API_HOST}${saved.cover_image.startsWith("/") ? saved.cover_image : "/" + saved.cover_image}`
          : "https://placehold.co/200x250";

        const newBook = {
          id: saved.id,
          title: saved.title,
          author: saved.author,
          category: saved.category,
          image: imageUrl,
          status: saved.status || "active",
        };
        setBooks(prev => [newBook, ...prev]);
      } else {
        const res = await fetchBooks(1, booksPerPage, "date_added", "DESC");
        const list = (res.data || []).map((book) => ({
          ...book,
          image: book.cover_image
            ? `${API_HOST}${book.cover_image.startsWith("/") ? book.cover_image : "/" + book.cover_image}`
            : "https://placehold.co/200x250",
        }));
        setBooks(list);
      }

      setIsModalOpen(false);
      setCurrentPage(1);
    } catch (err) {
      if (err?.response?.status === 409) {
        message.error("Book title already exists.");
      } else if (err?.response?.status === 400) {
        message.error(err?.response?.data?.message || "Validation error.");
      } else {
        message.error("Unable to save book. Please try again later.");
      }
    }
  };

  // 🟢 Local search & filter (optional)
  const filteredBooks = books.filter((b) => {
    const search = (b.title || "").toLowerCase().includes(searchTerm.toLowerCase());
    const statusOk = filterStatus ? (b.status === filterStatus) : true;
    return search && statusOk;
  });

  // 🟢 Pagination
  const startIndex = (currentPage - 1) * booksPerPage;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + booksPerPage);

  return (
    <Layout style={{ minHeight: "100vh", background: "#eaf2ff" }}>
      <Sidebar collapsed={collapsed} />
      <Layout style={{ background: "#eaf2ff" }}>
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
              style={{ fontSize: 20, color: "#000", marginRight: 10, marginTop: 20 }}
            />
            <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>List of Book</h1>
          </Space>

          <Space size="middle">
            <Input
              placeholder="Search book..."
              prefix={<SearchOutlined />}
              style={{ width: 220 }}
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />
            <Select
              placeholder="Filter status"
              suffixIcon={<FilterOutlined />}
              style={{ width: 180 }}
              allowClear
              value={filterStatus || undefined}
              onChange={(v) => { setFilterStatus(v); setCurrentPage(1); }}
            >
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
              <Option value="out_of_stock">Out of Stock</Option>
            </Select>
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

        <Content style={{ padding: "0 40px 40px", minHeight: "70vh" }}>
          {loading ? (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
              <Spin size="large" tip="Loading books..." />
            </div>
          ) : filteredBooks.length === 0 ? (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
              fontSize: 20,
              color: "#666",
              fontWeight: 500,
            }}>
              There are currently no books.
            </div>
          ) : (
            <>
              <BookList books={currentBooks} onView={(b) => setDetails(b)} />
              <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
                <Pagination
                  current={currentPage}
                  total={totalBooks}
                  pageSize={booksPerPage}
                  onChange={(p) => setCurrentPage(p)}
                  showSizeChanger={false}
                  showTotal={(t) => `Total ${Math.max(1, Math.ceil(t / booksPerPage))} page(s)`}
                />
              </div>
            </>
          )}
        </Content>

        <AddBookModal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onSave={handleAddBook}
        />

        <BookDetailsModal
          open={!!details}
          book={details}
          onClose={() => setDetails(null)}
        />
      </Layout>
    </Layout>
  );
}
