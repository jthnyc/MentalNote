export const Inputfield = (props) => {
    const { fieldID, labelText, type, required } = props;

    return (
        <>
            <label htmlFor={fieldID}>
                {labelText}
                <input id={fieldID} type={type} required={required} />
            </label>
        </>
    )
}