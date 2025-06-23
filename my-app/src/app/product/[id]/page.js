// Dynamic route

export default function ProductPage({params}){
    return(
        <div>
            <h1>Product Details {params.id}</h1>
        </div>
    )
}