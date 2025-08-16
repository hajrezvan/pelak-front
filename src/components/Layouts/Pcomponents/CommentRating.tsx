"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import SvgIcon from "@/components/Layouts/Pcomponents/SvgIcon";
import { PIcomments } from "@/type/product";
import { useTranslations } from "next-intl";
import Image from "next/image";

const moods = [
  {
    name: "5",
    value: 5,
    icon: "xMark",
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "4",
    value: 4,
    icon: "xMark",
    iconColor: "text-white",
    bgColor: "bg-green-500",
  },
  {
    name: "3",
    value: 3,
    icon: "xMark",
    iconColor: "text-white",
    bgColor: "bg-yellow-500",
  },
  {
    name: "2",
    value: 2,
    icon: "xMark",
    iconColor: "text-white",
    bgColor: "bg-orange-500",
  },
  {
    name: "1",
    value: 1,
    icon: "xMark",
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: "xMark",
    iconColor: "text-gray-400",
    bgColor: "bg-gray-200",
  },
];

export default function CommentRating({ comments }: { comments: PIcomments }) {
  const [selected, setSelected] = useState(moods[5]);

  const CommentRatingGlobal = useTranslations().raw("other");

  return (
    <div className=" max-w-4xl mx-auto px-2 py-PC-3">
      <h2 className="my-5">{CommentRatingGlobal.CommentRatingTitle}</h2>
      <ul role="list" className="space-y-6">
        {comments.items.map((item, index) => (
          <li key={item.id} className="relative flex gap-x-4">
            <div
              className={`${
                index === comments.items.length - 1 ? "h-6" : "-bottom-6"
              } absolute top-0 left-0 flex w-6 justify-center`}
            >
              <div className="w-px bg-PC-Gray" />
            </div>
            <Image
              alt="S"
              src="https://exportal.storage.c2.liara.space/products/1/f.jpg" // TODO alt
              width={24}
              height={24}
              className="relative mt-3 size-6 flex-none rounded-full bg-PC-BackgroundPanel"
            />
            <div className="flex-auto rounded-md p-3 ring-1 ring-PC-BackgroundBorder ring-inset">
              <div className="flex justify-between gap-x-4">
                <div className="py-0.5 text-xs/5 text-PC-TextMiddle">
                  <span className="font-medium text-PC-Text">
                    {item.user_name}
                  </span>
                </div>
                <time
                  dateTime={item.created_at}
                  className="flex-none py-0.5 text-xs/5 text-PC-TextMiddle"
                >
                  {item.created_at}
                </time>
              </div>
              <p className="text-sm/6 text-PC-TextMiddle">{item.message}</p>
            </div>
          </li>
        ))}
      </ul>

      {CommentRatingGlobal.CommentRatingNewCommentTitle}
      <div className="mt-6 flex gap-x-3">
        <Image
          alt=""
          src="https://exportal.storage.c2.liara.space/products/1/f.jpg"
          width={24}
          height={24}
          className="size-6 flex-none rounded-full bg-PC-BackgroundPanel"
        />
        <form action="#" className="relative flex-auto">
          <div className="bg-PC-BackgroundPanel overflow-hidden rounded-lg pb-12 outline-1 -outline-offset-1 outline-PC-BackgroundDark focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-PC-Primary">
            <label htmlFor="comment" className="sr-only">
              {CommentRatingGlobal.CommentRatingNewCommentText}
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={2}
              placeholder="Add your comment..."
              className="block w-full resize-none bg-transparent px-3 py-1.5 text-base text-PC-Text placeholder:text-PC-TextMiddle focus:outline-none sm:text-sm/6"
              defaultValue={""}
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pr-2 pl-3">
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <button
                  type="button"
                  className="-m-2.5 flex size-10 items-center justify-center rounded-full text-PC-TextMiddle hover:text-PC-Text"
                >
                  <SvgIcon
                    svgName="xMark"
                    className="mx-1 size-6 order-1 md:order-2"
                  />
                  <span className="sr-only">
                    {CommentRatingGlobal.CommentRatingAttachFile}
                  </span>
                </button>
              </div>
              <div className="flex items-center">
                <Listbox value={selected} onChange={setSelected}>
                  <Label className="sr-only">
                    {CommentRatingGlobal.CommentRatingYourRating}
                  </Label>
                  <div className="relative">
                    <ListboxButton className="relative -m-2.5 flex size-10 items-center justify-center rounded-full text-PC-TextMiddle hover:text-PC-Text">
                      <span className="flex items-center justify-center">
                        {selected.value === null ? (
                          <span>
                            <SvgIcon
                              svgName="xMark"
                              className="mx-1 size-6 order-1 md:order-2"
                            />
                            <span className="sr-only">
                              {CommentRatingGlobal.CommentRatingAddYourRating}
                            </span>
                          </span>
                        ) : (
                          <span>
                            <span className="flex size-8 items-center justify-center rounded-full">
                              <SvgIcon
                                svgName="xMark"
                                className="mx-1 size-6 order-1 md:order-2"
                              />
                            </span>
                            <span className="sr-only">{selected.name}</span>
                          </span>
                        )}
                      </span>
                    </ListboxButton>

                    <ListboxOptions
                      transition
                      className="absolute bottom-10 z-10 -ml-6 w-60 rounded-lg bg-PC-BackgroundPanel py-3 text-base ring-1 shadow-sm ring-PC-BackgroundBorder focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:ml-auto sm:w-64 sm:text-sm"
                    >
                      {moods.map((mood) => (
                        <ListboxOption
                          key={mood.value}
                          value={mood}
                          className="relative cursor-default bg-PC-BackgroundPanel px-3 py-2 select-none data-focus:bg-PC-Background"
                        >
                          <div className="flex items-center">
                            <div className="flex size-8 items-center justify-center rounded-full">
                              <SvgIcon
                                svgName={mood.icon}
                                aria-hidden="true"
                                className="size-5 shrink-0"
                              />
                            </div>
                            <span className="ml-3 block truncate font-medium">
                              {mood.name}
                            </span>
                          </div>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>
            </div>
            <button
              type="submit"
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
            >
              {CommentRatingGlobal.CommentRatingSubmitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
