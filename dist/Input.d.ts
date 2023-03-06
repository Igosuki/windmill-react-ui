import React from 'react';
export interface InputProps extends React.ComponentPropsWithRef<'input'> {
    /**
     * Defines the color of the input
     */
    valid?: boolean;
    /**
     * Defines if the input is disabled
     */
    disabled?: boolean;
    /**
     * Defines the type of the input
     */
    type?: string;
}
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=Input.d.ts.map