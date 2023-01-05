// import { useEffect } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import {useState} from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';
//   import { Link,useParams } from 'react-router-dom';
// import LikeButton from '../../components/recipecomponents/LikeButton';
// import { BsFillStarFill } from 'react-icons/bs';
// import '../../components/recipecomponents/RecipePage.css';


// export default function MyRecipe() {

//     const userId = useSelector((state) => { return state.UserId });
//     // console.log(userId);
//     const [recipe, setRecipe] = useState([]);
//     // console.log(recipe);
//     const [pageInfo, setPageInfo] = useState({
//         allPage: 0, curPage: 0, startPage: 0, endPage: 0
//     });

//     const pageRequest = (e) => {
//         serverRequest(e.target.value);
//     }

//     useEffect(() => {
//         serverRequest();
//     }, [])

//     const serverRequest = () => {
//         axios.get(`/myrecipe/${userId}`)
//             .then((response) => {
//                 console.log(response.data);               
//                 setRecipe(response.data);
//                 setPageInfo(response.data.pageInfo);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     };

//     return (
//         <div >
//             <section className='body'>
//                 <div className=''
//                     style={{

//                         display: "grid",
//                         gridTemplateRows: "1fr",
//                         gridTemplateColumns: "1fr 1fr 1fr 1fr",

//                     }}
//                 >
//                     {recipe.map(c => (
//                         <Card key={c.rno}
//                             style={{
//                                 width: '18rem',
//                                 fontSize: '1.125rem',
//                                 cursor: 'pointer',
//                                 padding: '0.5rem',
//                                 margin: '1rem',
//                             }}
//                         >
//                             <LikeButton></LikeButton>
//                             <Link to={`/reciperef/${c.rno}`}>
//                                 <img
//                                     alt="Sample"
//                                     src={c.thumbPath}
//                                 />
//                             </Link>

//                             <CardBody>
//                                 <Link to={`/reciperef/${c.rno}`}>
//                                     <CardTitle tag="h5">
//                                         {c.title}
//                                     </CardTitle>
//                                     <CardSubtitle
//                                         className="mb-2 text-muted"
//                                         tag="h6"
//                                     >
//                                         칼로리: {c.kcal}
//                                     </CardSubtitle>
//                                     <CardText className="mb-2 text-muted"
//                                         tag="h6">
//                                         작성자: {c.regId}
//                                     </CardText>
//                                 </Link>
//                                 <div>
//                                     <span className=''><BsFillStarFill className='inline fill-yellow-400' />&nbsp;&nbsp;{c.rating}</span>
//                                 </div>
//                             </CardBody>
//                         </Card>

//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// }

