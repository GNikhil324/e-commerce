import { useEffect, useState } from 'react';
import style from './product.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductListing() {
	const [productData, setProductData] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(0)
	const fetchData = async () => {
		try {
			const end = page * 10 - 10;
			const res = await fetch(`https://dummyjson.com/products?limit=${10}&skip=${end}`);
			const data = await res.json();
			if (data && data?.products?.length > 0) {
				setProductData(data.products);
				setTotalPage(data.total / 10);
			}
		} catch (e) { console.log("error", e) }
	}

	useEffect(() => {
		fetchData().then();
	}, [page]);

	const selectPageHandler = (selectPage) => {
		if(selectPage >= 1 && selectPage <= totalPage && selectPage != page) { 
		setPage(selectPage);
		}
	}
	return (
		<Container>
			<Row>
				{productData?.map((item, index) => {
					return (
						<Col md={3} key={index} className='cursor-pointer'>
							<Link to={`/product/${item?.id}`}>
								<div className={style.product_card}>
									<div className={style.badge}>{item?.category}</div>
									<div className={style.product_tumb}>

										<img src={item?.thumbnail} alt="" />
									</div>
									<div className={style.product_details}>
										<span className={style.product_catagory}>{item?.brand}</span>
										<h4 className='max-line-1'><a href="">{item?.title}</a></h4>
										<p className='max-line-2'>{item?.description}</p>
										<div className={style.product_bottom_details}>
											<div className={style.product_price}>₹ {item?.price}</div>
											<div className={style.product_links}>
												<a href=""><i className="fa fa_heart"></i></a>
												<a href=""><i className="fa fa_shopping_cart"></i></a>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</Col>

					)
				})}
				{productData.length > 0 && <div className='mb-10 w-full'>
					<nav className="isolate inline-flex -space-x-px rounded-md shadow-sm w-full" aria-label="Pagination">
						<span className={` cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`} onClick={() => selectPageHandler(page - 1)}>
							<span className="sr-only">Previous</span>
							<svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
							</svg>
						</span>

						{[...Array(totalPage)].map((_, i) => {

							return (
								<span key={i} aria-current="page" className={`cursor-pointer relative  inline-flex items-center  px-4 py-2 text-sm font-semibold focus:z-20  
								${page === i + 1 ? `z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600` : `text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0`}
								`}
									onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
							)
						})}
						<span className=" cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"  onClick={() => selectPageHandler(page + 1)}>
							<span className="sr-only">Next</span>
							<svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
							</svg>
						</span>
					</nav>
				</div>}



			</Row>
		</Container >

	)
}
