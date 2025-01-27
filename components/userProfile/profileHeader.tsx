/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import _ from "lodash";

import { UserContext } from "@/store/user-context";
import BlueRoundedButton from "../common/buttons/blueRoundedButton";
import WhiteRounedButton from "../common/buttons/whiteRoundedButton";
import WhiteSquareButton from "../common/buttons/whiteSquareButton";

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
              <WhiteRounedButton
                className="right-0 bottom-0 !w-10 !h-10 absolute"
                dataDropdownToggle="change-avatar"
              >
                <img
                  alt="add to story"
                  className="h-5 w-5 absolute"
                  src="/svg/camera.svg"
                />
              </WhiteRounedButton>
              <div
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700 dark:divide-gray-600 shadow-lg shadow-gray-600"
                id="change-avatar"
              >
                <ul
                  aria-labelledby="dropdownDefaultButton"
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                >
                  <li>
                    <a
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      href="#"
                    >
                      Choose from photo
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      href="#"
                    >
                      Upload photo
                    </a>
                  </li>
                </ul>
              </div>
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
              <BlueRoundedButton>
                <img
                  alt="add to story"
                  className="h-5 inline-block"
                  src="/svg/plus.svg"
                />
                <span className="inline-block ml-1">Add to story</span>
              </BlueRoundedButton>
              <WhiteRounedButton>
                <img
                  alt="add to story"
                  className="h-5 inline-block"
                  src="/svg/edit.svg"
                />
                <span className="inline-block ml-1">Edit profile</span>
              </WhiteRounedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
