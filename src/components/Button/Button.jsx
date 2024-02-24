import css from "./Button.module.css"

const Button = (props) => {
    const { handleLoadMore } = props
    return (
        <button className={css.Button} onClick={handleLoadMore} type="button">Load more</button>
    )
}
export default Button