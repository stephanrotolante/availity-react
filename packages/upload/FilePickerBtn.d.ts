export interface FilePickerBtnProps {
    onClick?: Function;
    onChange?: Function;
    multiple?: boolean;
    name?: string;
    color?: string;
    children?: Node;
    allowedFileTypes?: Array<string>;
    maxSize?: number;
    'data-testid'?:string;
}

declare const FilePickerBtn: React.ComponentType<FilePickerBtnProps>;

export default FilePickerBtn;