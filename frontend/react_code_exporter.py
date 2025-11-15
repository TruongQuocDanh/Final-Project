import os

# Các loại file cần export
VALID_EXT = [
    ".js", ".jsx", ".ts", ".tsx",
    ".css", ".scss",
    ".html", ".json", ".md"
]

# Các thư mục cần loại trừ
EXCLUDE_DIRS = [
    "node_modules",
    "dist",
    "build",
    ".git",
    ".vscode",
    ".idea",
    "coverage",
    "__pycache__"
]

OUTPUT_FILE = "react_code_export.md"


def should_include(file_path: str) -> bool:
    ext = os.path.splitext(file_path)[1].lower()
    return ext in VALID_EXT


def detect_language(filename: str) -> str:
    if filename.endswith(".js") or filename.endswith(".jsx"):
        return "javascript"
    if filename.endswith(".ts") or filename.endswith(".tsx"):
        return "typescript"
    if filename.endswith(".css") or filename.endswith(".scss"):
        return "css"
    if filename.endswith(".html"):
        return "html"
    if filename.endswith(".json"):
        return "json"
    if filename.endswith(".md"):
        return "markdown"
    return ""


def export_code(base_dir: str):
    md_lines = []
    md_lines.append("# React Project Code Export\n")
    md_lines.append("Generated automatically by **react_code_exporter.py**\n\n")
    md_lines.append("---\n")

    for root, dirs, files in os.walk(base_dir):

        # 🔥 Loại trừ thư mục rác
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]

        for file in files:
            file_path = os.path.join(root, file)

            if not should_include(file_path):
                continue

            rel_path = os.path.relpath(file_path, base_dir)

            md_lines.append(f"## `{rel_path}`\n")
            md_lines.append(f"```{detect_language(file)}")

            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    md_lines.append(f.read())
            except Exception as e:
                md_lines.append(f"<!-- Error reading file: {str(e)} -->")

            md_lines.append("```\n")
            md_lines.append("---\n")

    with open(os.path.join(base_dir, OUTPUT_FILE), "w", encoding="utf-8") as out:
        out.write("\n".join(md_lines))

    print(f"✅ Export complete: {OUTPUT_FILE}")


if __name__ == "__main__":
    project_dir = os.path.dirname(os.path.abspath(__file__))
    export_code(project_dir)
