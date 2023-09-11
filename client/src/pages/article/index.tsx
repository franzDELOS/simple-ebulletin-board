import React from "react";
import { Fragment, useState } from "react";
import {
  useGetArticleQuery,
  usePostArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} from "@/features/apiServices/ArticleAPI";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "@/features/modal/modalSlice";
import Modal from "@/components/Modal/Modal";

interface Article {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface ArticleList {
  articles: Article[];
}

const Article: React.FC<ArticleList> = () => {
  const { data: articles, isLoading, isError } = useGetArticleQuery({});

  const dispatch = useDispatch();

  const handleClickCreateArticle = () => {
    setDisplayArticle(null);
    setSelectedArticle(null);
    dispatch(openModal());
    setTitle("");
    setContent("");
  };

  const [postArticle] = usePostArticleMutation();

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [updateArticle] = useUpdateArticleMutation();

  const handleModalSubmit = async () => {
    if (selectedArticle) {
      try {
        const response = await updateArticle({
          articleID: selectedArticle.id,
          articleData: { title, content },
        });
        if ("error" in response) {
          throw new Error("Failed to update article");
        } else {
          console.log("Update Article Successfully");
          dispatch(closeModal());
          setSelectedArticle(null);
          setTitle("");
          setContent("");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      await postArticle({ title, content });
      dispatch(closeModal());
    }
  };

  const handleEditClick = (article: Article, event: React.MouseEvent) => {
    event.stopPropagation();
    setTitle(article.title);
    setContent(article.content);
    setSelectedArticle(article);
    dispatch(openModal());
  };

  const [deleteArticle] = useDeleteArticleMutation();

  const handleDeleteClick = async (
    article: Article,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    try {
      const response = await deleteArticle({ articleID: article.id });
      if ("error" in response) {
        throw new Error("Failed to delete article");
      } else {
        console.log("Delete Article Successfully");
        dispatch(closeModal());
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [displayArticle, setDisplayArticle] = useState<Article | null>(null);

  const handleArticleClick = (article: Article) => {
    setDisplayArticle(article);
    dispatch(openModal());
  };

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <Fragment>
      <div className="m-5">
        <button
          className="h-10 mb-6 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          onClick={handleClickCreateArticle}
        >
          Create New Article
        </button>
        <div className="grid grid-cols-4 gap-4">
          {articles?.map((article: Article) => (
            <div key={article.id}>
              <div
                className="max-w-xs overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 "
                onClick={() => handleArticleClick(article)}
              >
                <img
                  className="object-cover w-full h-48"
                  src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Flower and sky"
                />
                <div className="px-6 py-4">
                  <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
                    {article.title}
                  </h4>
                  <p className="leading-normal text-gray-700">
                    {article.content.length > 100
                      ? `${article.content.substring(0, 50)}...`
                      : article.content}
                  </p>
                  <p className="text-gray-400">
                    {formatDate(article.created_at)}
                  </p>
                </div>
                <div className="flex justify-between m-3 px-3">
                  <button
                    className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                    onClick={(e) => handleEditClick(article, e)}
                  >
                    Edit
                  </button>
                  <button
                    className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
                    onClick={(e) => handleDeleteClick(article, e)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal className="p-4">
        {displayArticle ? (
          <Fragment>
            <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
              <div className="flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => dispatch(closeModal())}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <img
                className="object-cover w-full h-48"
                src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Flower and sky"
              />
              <div className="px-6 py-4">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
                  {displayArticle.title}
                </h4>
                <p className="leading-normal text-gray-700">
                  {displayArticle.content}
                </p>
                <p className="py-3 text-gray-400">
                  {formatDate(displayArticle.created_at)}
                </p>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="space-y-2">
              <div className="flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => dispatch(closeModal())}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h1 className="text-lg font-medium">Create Article</h1>
              <div>
                <label htmlFor="">Input Title</label>
                <input
                  className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Input Content</label>
                <textarea
                  className="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                  onClick={handleModalSubmit}
                >
                  {selectedArticle ? "Update" : "Post"}
                </button>
              </div>
            </div>
          </Fragment>
        )}
      </Modal>
    </Fragment>
  );
};

export default Article;
