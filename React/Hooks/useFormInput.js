import React from "react";

//for handling simple text input in forms

function useFormTextInput() {
    const [value, setValue] = useState("");
    const handleFormChange = (e) => {
        setValue(e.target.value);
    }
    const resetValue = () => {
        setValue("");
    }
    return [value, handleFormChange, resetValue];
}

export default useFormTextInput;

