import { useEffect, useState } from 'react';
import style from './product.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductListing() {
	const [productData, setProductData] = useState([]);
	const fetchData = async () => {
		try {
			const res = await fetch('https://dummyjson.com/products');
			const data = await res.json();
			if(data?.products?.length > 0){
				setProductData(data.products);
			}
		} catch (e) { console.log("error", e) }
	}

	useEffect(() => {
		fetchData().then();
	}, [])
	return (
		<Container>
			<Row>
				{productData?.map((item, index) => {
					return (
							<Col md={4} key={index} className='cursor-pointer'>
								<Link to={`/product/${item?.id}`}>
								<div className={style.product_card}>
									<div className={style.badge}>{item?.category}</div>
									<div className={style.product_tumb}>
										<img src={item?.images[0]} alt="" />
									</div>
									<div className={style.product_details}>
										<span className={style.product_catagory}>{item?.category}</span>
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

			</Row>
		</Container >

	)
}
