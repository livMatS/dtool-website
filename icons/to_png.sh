#!/bin/bash

# Directory containing the PDF files
input_directory="."
# Directory to save the PNG files
output_directory="."
# Desired size of the output PNG icons
icon_size="64x64"

# Create the output directory if it does not exist
mkdir -p "$output_directory"

# Loop over each PDF file in the input directory
for pdf_file in "$input_directory"/*.pdf; do
  # Extract the base filename without extension
  base_filename=$(basename "$pdf_file" .pdf)

  # Define the output PNG file path
  png_file="$output_directory/$base_filename.png"

  # Convert the PDF to PNG with the desired icon size
  convert -density 300 "$pdf_file" -resize "$icon_size" "$png_file"

  # Print a message indicating the conversion is done
  echo "Converted $pdf_file to $png_file with size $icon_size"
done

echo "All PDFs have been converted to PNGs."
