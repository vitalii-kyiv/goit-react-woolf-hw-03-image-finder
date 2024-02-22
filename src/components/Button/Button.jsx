const Button = (props) => {
    const { handleLoadMore } = props
    return (
        <button onClick={handleLoadMore} type="button">Load more</button>
    )
}
export default Button