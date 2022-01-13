import React, { useState } from "react";

// for switching state between true and false

function useBoolToggle(initialValue = False) {
    const [value, setValue] = useState(initialValue);

    const boolToggle = () => {
        setValue(!value);
    }

    return [value, boolToggle];
}

export default useBoolToggle;