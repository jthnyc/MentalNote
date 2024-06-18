export const MessageField = (props) => {
    const { fieldID, labelText, type, required } = props;

    return (
        <>
            <label htmlFor={fieldID}>
                {labelText}
                <textarea id={fieldID} type={type} required={required}></textarea>
            </label>
        </>
    )
}