import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeArticle } from "../redux/features/savedSlice";
import { Link } from "react-router-dom";

function Saved() {
  const savedArticles = useSelector((state) => state.saved.savedArticles);
  let number = 0;
  const dispatch = useDispatch();

  console.log(savedArticles);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold my-3 text-center">Saved News</h1>
      <hr className="border border-gray-200 border-t-2 w-[89%] flex justify-center mx-auto mb-6"></hr>

      <div className="w-[89%] flex justify-center mx-auto">
        <hr className="border border-gray-200 border-t-2 mb-6"></hr>
        <div className="overflow-x-auto ">
          {savedArticles > [1] ? (
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Abstract</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {savedArticles.map((article, index) => (
                  <tr key={index}>
                    <th>{++number}</th>
                    <td>{article.headline.main}</td>
                    <td>{article.abstract}</td>
                    <td>
                      <ul className="flex flex-row gap-x-5">
                        <li className="">
                          <a
                            className="btn "
                            href={article.web_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read
                          </a>
                        </li>
                        <li
                          className="btn btn-warning"
                          onClick={() => dispatch(removeArticle(article))}
                        >
                          Delete
                        </li>
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500 text-lg font-semibold">
                No saved articles found. Save
                <Link to="/" className="font-extrabold text-black">
                  {" Article "}
                </Link>
                to view them here!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Saved;
