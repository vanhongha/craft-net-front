import { useContext } from "react";
import _ from "lodash";

import { UserContext } from "@/store/user-context";

export default function ProfileHeader() {
  const userCtx = useContext(UserContext);
  let coverUrl = userCtx.user.coverUrl;
  let avatarUrl = userCtx.user.avatarUrl;

  if (_.isNil(coverUrl)) {
    coverUrl = "/default-cover.png";
  }

  if (_.isNil(avatarUrl)) {
    avatarUrl = "/default-avatar.png";
  }

  return (
    <div className="mb-3">
      <div className="h-72 relative block overflow-hidden">
        <img
          alt="cover"
          className="object-cover w-full h-full absolute"
          src={coverUrl}
        />
      </div>
      <div>
        <div className="max-w-screen-xl w-full mx-auto flex flex-col relative">
          <div className="absolute h-48 w-48 top-[-90px] m-auto left-0 right-0">
            <div className="avatar-container mx-auto flex items-center bg-white rounded-full">
              <img
                alt=""
                className="rounded-full border-2 w-48 h-48 m-auto"
                src={avatarUrl}
              />
            </div>
          </div>
          <div className="relative text-center w-full flex flex-row justify-between pl-10 pr-10 mt-[120px]">
            <div className="w-1/3">0 friend</div>
            <div className="w-1/3">
              <div>
                <span className="text-3xl font-bold">
                  {userCtx.user.getFullName()}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-sm">{userCtx.user.bio}</span>
              </div>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center">
              <button
                className="flex items-center justify-center w-40 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4
                  focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 my-1 dark:bg-blue-600
                  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                <img
                  alt="add to story"
                  className="h-5 inline-block"
                  src="/svg/plus.svg"
                />
                <span className="inline-block ml-1">Add to story</span>
              </button>
              <button
                className="flex items-center justify-center w-40 py-2.5 px-5 me-2 my-1 text-sm font-medium text-gray-900 focus:outline-none bg-white
                  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10
                  focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400
                  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                <img
                  alt="add to story"
                  className="h-5 inline-block"
                  src="/svg/edit.svg"
                />
                <span className="inline-block ml-1">Edit profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
