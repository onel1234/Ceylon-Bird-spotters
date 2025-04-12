/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import * as React from "react";

// Modified Card component with special handling for header image
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  // Separate the first child (assumed to be the image container) from the rest
  const childrenArray = React.Children.toArray(children);
  const firstChild = childrenArray[0];
  const restChildren = childrenArray.slice(1);

  return (
    <div
      ref={ref}
      className={`rounded-xl border border-gray-200 bg-white text-gray-950 shadow dark:border-gray-800 dark:bg-gray-800 dark:text-gray-50 font-[Poppins] overflow-hidden ${className}`}
      style={{
        fontFamily: 'Poppins, sans-serif',
      }}
      {...props}
    >
      {/* Render the first child (image) without padding */}
      {firstChild}
      
      {/* Render the rest of the children */}
      <div className="card-body">
        {restChildren}
      </div>
    </div>
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    style={{
      display: 'flex',
      visibility: 'visible',
      fontFamily: 'Poppins, sans-serif',
    }}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`font-semibold leading-none tracking-tight ${className}`}
    style={{
      display: 'block',
      visibility: 'visible',
      fontFamily: 'Poppins, sans-serif',
    }}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={`p-6 pt-0 ${className}`} 
    style={{
      fontFamily: 'Poppins, sans-serif',
    }}
    {...props} 
  />
));
CardContent.displayName = "CardContent";

// New component specifically for card header images
const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { imageProps?: React.ComponentProps<'img'> }
>(({ className, imageProps, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`w-full relative overflow-hidden ${className}`}
    style={{
      padding: 0,
      margin: 0,
    }}
    {...props}
  >
    {children}
  </div>
));
CardImage.displayName = "CardImage";

export { Card, CardHeader, CardTitle, CardContent, CardImage };