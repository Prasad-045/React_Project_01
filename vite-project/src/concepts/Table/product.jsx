import React from "react";
import "./product.css"
import productsData from "./productsData";

function Products(){
    return <div>
        <h2>Products Information</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deleniti voluptatibus corporis eius accusamus soluta eos tempore asperiores ipsam hic id cupiditate perferendis ea reprehenderit, totam exercitationem itaque maiores culpa dolorem sequi at magni quam? Assumenda inventore animi odit mollitia officia ab iste doloribus debitis numquam, cupiditate suscipit, non labore voluptates deserunt blanditiis quos porro minus nobis rem quidem repellendus? Dignissimos libero debitis vitae maxime iure non hic ipsum illo similique ipsa, repellendus esse porro tempore molestias enim. Minus, saepe. Nihil itaque a facere impedit exercitationem numquam vitae, dolore doloribus quaerat, ut culpa voluptatibus, cum minus ipsa veniam? Iure culpa temporibus, earum, cupiditate veniam quam, quidem quae in quasi tenetur cumque vero qui ex? Ipsum beatae suscipit ea, repudiandae esse neque illum, totam eos hic in a obcaecati illo consectetur impedit laborum voluptates reprehenderit voluptatem ab. Dicta repudiandae tempora vel deleniti voluptatum, esse, iste excepturi deserunt cumque earum adipisci neque libero numquam hic sequi laboriosam accusantium, repellat animi amet quibusdam at suscipit minima asperiores. Sed earum animi similique beatae. Tempore autem minus qui eum unde rerum atque, ab enim mollitia hic nobis architecto cum in pariatur obcaecati excepturi. Veniam animi provident labore tempora quae laudantium eum cupiditate ut doloremque. Tempore.</p>    
    <table>
      <thead>
        <th>Id</th>
        <th>title</th>
        <th>price</th>
        <th>category</th>
        <th>description</th>
        <th>image</th>
        <th>rating</th>
      </thead>
      <tbody>
        {
            productsData.map(function (product){
              return <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td><img src={product.image} height={100}/></td>
                <td>{product.rating.rate}</td>
              </tr>
            })
        }
        </tbody>
    </table>
    </div>
}
export default Products;






