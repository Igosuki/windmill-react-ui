import React from 'react';
export interface TextareaProps extends React.ComponentPropsWithRef<'textarea'> {
    /**
     * Defines the color of the textarea
     */
    valid?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
//# sourceMappingURL=Textarea.d.ts.map