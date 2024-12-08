import React from "react";

import InputFieldWithLabel from "@/components/common/InputFieldWithLabel"

export default function LoginForm() {
	const emailSvg = <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
		<g id="SVGRepo_iconCarrier">
			<circle cx="12" cy="6" r="4" stroke="#6e6e6e" strokeWidth="1.5"></circle>
			<path
				d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
				stroke="#6e6e6e" strokeWidth="1.5" strokeLinecap="round"></path>
		</g>
	</svg>
	const passwordSvg = <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
		<g id="SVGRepo_iconCarrier">
			<path
				d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
				stroke="#6e6e6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</g>
	</svg>

	return (
		<>
			<InputFieldWithLabel
				id="username"
				label="Username or Email Address"
				type="text"
				svg={emailSvg}
				className="mb-4"
			/>
			<InputFieldWithLabel
				id="password"
				label="Your Password"
				type="password"
				svg={passwordSvg}
				className="mb-4"
			/>
			<div className="flex justify-between mb-4">
				<div>
					<input id="default-checkbox" type="checkbox" value=""
					       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
					<label htmlFor="default-checkbox"
					       className="ms-2 text-sm font-medium text-gray-900">Remember Me</label>
				</div>
				<a className="ms-2 text-sm font-normal text-gray-900 italic" href="">
					Forget password?</a>
			</div>
			<button type="button"
			        className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full">
				SIGN IN
			</button>
		</>
	);
}