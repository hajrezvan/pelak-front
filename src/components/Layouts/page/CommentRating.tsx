"use client";

import { PIproduct } from "@/data/pages/product";
import Image from "next/image";
import { PDcommentRating } from "@/data/components/commentRating";


export default function CommentRating({ comments, locale }: { comments: PIproduct["comments"], locale: string }) {


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
    ((locale === 'fa' && 'fa-IR') || (locale === 'ar' && 'ar-IR') || (locale === 'ru' && 'ru-RU') || 'en-US'),{
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-P-2">
      <h2 className="my-5">{PDcommentRating[locale].title}</h2>
      <ul role="list" className="space-y-6">
        {comments.map((item, index) => (
          <li key={item.id} className="relative flex gap-x-4">
            <div
              className={`${
                index === comments.length - 1 ? "h-6" : "-bottom-6"
              } absolute top-0 left-0 flex w-6 justify-center`}
            >
              <div className="w-px bg-P-BackgroundBorder" />
            </div>
            <Image
              alt="S"
              src="https://exportal.storage.c2.liara.space/products/1/f.jpg" // TODO alt
              width={24}
              height={24}
              className="relative mt-3 size-6 flex-none rounded-full bg-P-BackgroundDark"
            />
            <div className="flex-auto rounded-md p-3 ring-1 ring-P-BackgroundBorder ring-inset">
              <div className="flex justify-between gap-x-4">
                <div className="py-0.5 text-xs/5 text-P-TextMiddle">
                  <span className="font-medium text-P-Text">
                    {item.name}
                  </span>
                </div>
                <time
                  dateTime={formatDate(item.created)}
                  className="flex-none py-0.5 text-xs/5 text-P-TextMiddle"
                >
                  {formatDate(item.created)}
                </time>
              </div>
              <p className="text-sm/6 text-P-TextMiddle">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-P-TextMiddle pt-P-5">
      {PDcommentRating[locale].newCommentTitle}
      </p>
      <div className="my-P-5 flex gap-x-3">
        <Image
          alt=""
          src="https://exportal.storage.c2.liara.space/products/1/f.jpg"
          width={24}
          height={24}
          className="size-6 flex-none rounded-full bg-P-BackgroundDark"
        />
        <form action="#" className="relative flex-auto">
          <div className="bg-P-BackgroundDark overflow-hidden rounded-lg pb-12 outline-1 -outline-offset-1 outline-P-BackgroundDark focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-P-Primary">
            <label htmlFor="comment" className="sr-only">
              {PDcommentRating[locale].newCommentText}
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={2}
              placeholder="Add your comment..."
              className="block w-full resize-none bg-transparent px-3 py-1.5 text-base text-P-Text placeholder:text-P-TextMiddle focus:outline-none sm:text-sm/6"
              defaultValue={""}
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pr-2 pl-3">
            <button
              type="submit"
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
            >
              {PDcommentRating[locale].submitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
