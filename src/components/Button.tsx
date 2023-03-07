import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary';
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;

}

export default function Button({ color = 'default', className, disabled, ...rest }: ButtonProps) {

switch (color) {
  case 'default': {
        className = `${className} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" ${disabled ? 'opacity-50 cursor-not-allowed' : 'text-gray-500'}`;
    }break;
  case 'primary': {
        className = `${className} focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ${disabled ? 'opacity-50 cursor-not-allowed' : 'text-blue-500'}`;
  }break;
  case 'secondary': {
        className = `${className} focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${disabled ? 'opacity-50 cursor-not-allowed' : 'text-green-500'}`;
  }break;
}

    return (
        <div>
        <button className={className} {...rest}>{rest.children}</button>
        </div>

    );
 }
