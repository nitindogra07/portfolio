export default function DownloadBtn() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // public folder ke andar file
    link.download = "My_Resume.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Download PDF
    </button>
  );
}
