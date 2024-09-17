import React from "react";

export default function HeroSection() {
	return (
		<div>
			<h1 className=" font-semibold text-2xl bg-slate-200 p-3 rounded-md shadow-md">
				WELCOME TO THE ONLINE EXPERTS PRO
			</h1>
			<span> </span>

			<card>
				{/* <div></div> */}
				<div class="flex gap-8 justify-center mt-10 ">
					<div class="flex  justify-center mt-10 ">
						<div class="bg-white  rounded-lg shadow-lg w-64">
							<div className="">
								<img
									src="https://images.unsplash.com/photo-1424115087662-5845efc6b366?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGJvb2tzfGVufDB8fDB8fHww"
									alt=""
									className=" rounded-t-lg shadow-md"
									width="500rem"
									height="500rem"
								/>
							</div>
							<div className="p-3">
								<h3 class="text-lg font-bold mb-2">Card 1 Title</h3>
								<p class="text-gray-600 mb-4">
									This is some text for the first card. You can put a short
									description here.
								</p>
								<button class=" text-white px-4 py-2 rounded-md ">
									Click Me
								</button>
							</div>
						</div>
					</div>
					<div class="flex  justify-center mt-10 ">
						<div class="bg-white  rounded-lg shadow-lg w-64">
							<div className="">
								<img
									src="https://images.unsplash.com/photo-1424115087662-5845efc6b366?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGJvb2tzfGVufDB8fDB8fHww"
									alt=""
									className=" rounded-t-lg shadow-md"
									width="500rem"
									height="500rem"
								/>
							</div>
							<div className="p-3">
								<h3 class="text-lg font-bold mb-2">Card 1 Title</h3>
								<p class="text-gray-600 mb-4">
									This is some text for the first card. You can put a short
									description here.
								</p>
								<button class=" text-white px-4 py-2 rounded-md ">
									Click Me
								</button>
							</div>
						</div>
					</div>
					<div class="flex  justify-center mt-10 ">
						<div class="bg-white  rounded-lg shadow-lg w-64">
							<div className="">
								<img
									src="https://images.unsplash.com/photo-1424115087662-5845efc6b366?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGJvb2tzfGVufDB8fDB8fHww"
									alt=""
									className=" rounded-t-lg shadow-md"
									width="500rem"
									height="500rem"
								/>
							</div>
							<div className="p-3">
								<h3 class="text-lg font-bold mb-2">Card 1 Title</h3>
								<p class="text-gray-600 mb-4">
									This is some text for the first card. You can put a short
									description here.
								</p>
								<button class=" text-white px-4 py-2 rounded-md ">
									Click Me
								</button>
							</div>
						</div>
					</div>
				</div>
			</card>
		</div>
	);
}
