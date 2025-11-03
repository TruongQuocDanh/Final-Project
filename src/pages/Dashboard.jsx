import { useState, useEffect } from "react";
import {
  Layout,
  Button,
  Input,
  Select,
  Space,
  message,
  Pagination,
  Spin,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  FilterOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Sidebar from "../components/SideBar";
import BookList from "../components/BookList";
import AddBookModal from "../components/AddBookModal";

const { Header, Content } = Layout;
const { Option } = Select;

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const booksPerPage = 8;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setBooks([
        {
          id: 1,
          title: "Cooking Made Easy",
          author: "Emily Clark",
          category: "Learning, Study",
          image: "https://placehold.co/200x250",
          status: "In Stock",
        },
        {
          id: 2,
          title: "Mystery of the Lost Island",
          author: "Jane Smith",
          category: "Learning, Study",
          image: "https://placehold.co/200x250",
          status: "Out of Stock",
        },
        {
          id: 3,
          title: "The Hidden Kingdom",
          author: "Laura Hill",
          category: "Fantasy",
          image: "https://placehold.co/200x250",
          status: "Inactive",
        },
        {
          id: 4,
          title: "Journey to the West",
          author: "Wukong",
          category: "Classic",
          image: "https://placehold.co/200x250",
          status: "In Stock",
        },
        {
          id: 5,
          title: "Digital Fortress",
          author: "Dan Brown",
          category: "Thriller",
          image: "https://placehold.co/200x250",
          status: "In Stock",
        },
        {
          id: 6,
          title: "Design Thinking",
          author: "Tim Brown",
          category: "Learning",
          image: "https://placehold.co/200x250",
          status: "Out of Stock",
        },
        {
          id: 7,
          title: "Harry Potter",
          author: "J.K. Rowling",
          category: "Fantasy",
          image: "https://placehold.co/200x250",
          status: "In Stock",
        },
        {
          id: 8,
          title: "Algorithms to Live By",
          author: "Brian Christian",
          category: "Science",
          image: "https://placehold.co/200x250",
          status: "Inactive",
        },
        {
          id: 9,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          category: "Fantasy",
          image: "https://placehold.co/200x250",
          status: "In Stock",
        },
      ]);
      setLoading(false);
    }, 1500); // simulate 1.5s loading
  }, []);

  // Add new book
  const handleAddBook = (newBook) => {
    const id = books.length + 1;
    const bookData = {
      id,
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
      image: newBook.image?.thumbUrl || "https://placehold.co/200x250",
      status: "In Stock",
    };

    setBooks((prev) => [bookData, ...prev]);
    setIsModalOpen(false);
    message.success("Book added successfully!");
  };

  // 🟢 Search + Filter
  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? book.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });


  const totalBooks = filteredBooks.length;
  const startIndex = (currentPage - 1) * booksPerPage;
  const currentBooks = filteredBooks.slice(
    startIndex,
    startIndex + booksPerPage
  );

  return (
    <Layout style={{ minHeight: "100vh", background: "#eaf2ff" }}>
      {/* Sidebar */}
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
              List of Book
            </h1>
          </Space>

          <Space size="middle">
            <Input
              placeholder="Search book..."
              prefix={<SearchOutlined />}
              style={{ width: 200 }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Select
              placeholder="Filter status"
              suffixIcon={<FilterOutlined />}
              style={{ width: 150 }}
              allowClear
              value={filterStatus || undefined}
              onChange={(value) => setFilterStatus(value)}
            >
              <Option value="In Stock">In Stock</Option>
              <Option value="Out of Stock">Out of Stock</Option>
              <Option value="Inactive">Inactive</Option>
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
              There are currently no books.
            </div>
          ) : (
            <>
              <BookList books={currentBooks} />
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

        {/* Add Book Modal */}
        <AddBookModal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onSave={handleAddBook}
        />
      </Layout>
    </Layout>
  );
}
