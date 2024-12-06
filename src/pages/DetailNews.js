import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function DetailNews() {
  const { id } = useParams();
  const savedArticles = useSelector((state) => state.saved.savedArticles);
  const article = savedArticles.find((article) => article._id === id);

  if (!article) {
    return (
      <div className="p-5">
        <h1 className="text-2xl font-bold">Berita Tidak Ditemukan</h1>
        <p>Silakan kembali ke halaman sebelumnya.</p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">{article.headline.main}</h1>
      <p className="mb-4">{article.abstract}</p>
      <a
        href={article.web_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Baca selengkapnya
      </a>
    </div>
  );
}

export default DetailNews;
