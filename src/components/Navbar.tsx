export default function Navbar() {
	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div className="flex items-center justify-between w-1/2 md:max-w-[512px]">
					<a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
						<img src="/images/craft-net-logo.svg" className="h-8" alt="Flowbite Logo"/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							Craftnet
						</span>
					</a>
					<form className="w-[calc(100%-150px)] mx-auto flex" height="12">
						<label htmlFor="default-search"
						       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
						<div className="relative">
							<input type="search" id="default-search"
							       className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							       placeholder="Search Crafnet" required/>
						</div>
						<button type="submit"
						        className="p-2.5 ms-1 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
							     viewBox="0 0 20 20">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
								      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
							</svg>
							<span className="sr-only">Search</span>
						</button>
					</form>
				</div>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<a href="#"
							   className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
							   aria-current="page">Home</a>
						</li>
						<li>
							<a href="#"
							   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Videos</a>
						</li>
						<li>
							<a href="#"
							   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pages</a>
						</li>
						<li>
							<a href="#"
							   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Groups</a>
						</li>
					</ul>
				</div>
				<div>
					<button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation"
					        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					        type="button">Dropdown header <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true"
					                                           xmlns="http://www.w3.org/2000/svg" fill="none"
					                                           viewBox="0 0 10 6">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
						      d="m1 1 4 4 4-4"/>
					</svg>
					</button>

					{/*Dropdown menu*/}
					<div id="dropdownInformation"
					     className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
						<div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
							<div>Bonnie Green</div>
							<div className="font-medium truncate">name@flowbite.com</div>
						</div>
						<ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
						    aria-labelledby="dropdownInformationButton">
							<li>
								<a href="#"
								   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
							</li>
							<li>
								<a href="#"
								   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
							</li>
							<li>
								<a href="#"
								   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
							</li>
						</ul>
						<div className="py-2">
							<a href="#"
							   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
								out</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}