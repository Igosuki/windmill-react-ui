import React from 'react';
export interface SelectProps extends React.ComponentPropsWithRef<'select'> {
    /**
     * Defines the color of the select
     */
    valid?: boolean;
}
declare const Select: React.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & React.RefAttributes<HTMLSelectElement>>;
export default Select;
//# sourceMappingURL=Select.d.ts.map