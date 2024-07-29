#!/bin/bash

# Directory containing the PDF files
input_directory="."
# Directory to save the SVG files
output_directory="."

# Create the output directory if it does not exist
mkdir -p "$output_directory"

# Loop over each PDF file in the input directory
for pdf_file in "$input_directory"/*.pdf; do
  # Extract the base filename without extension
  base_filename=$(basename "$pdf_file" .pdf)

  # Define the output SVG file path
  svg_file="$output_directory/$base_filename.svg"

  # Convert the PDF to SVG
  pdf2svg "$pdf_file" "$svg_file"

  # Print a message indicating the conversion is done
  echo "Converted $pdf_file to $svg_file"
done

echo "All PDFs have been converted to SVGs."
