Used parts of

    https://texample.net/tikz/examples/arrow-table/
    https://texample.net/tikz/examples/inertial-navigation-system/   

Icon sources

   - Python icon: https://www.python.org/community/logos/, https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg
   - Terminal icon: https://iconduck.com/icons/171359/terminal
     License: CC BY 4.0
   - OpenAPI icon: https://worldvectorlogo.com/logo/openapi-1
     License: Apache License Version 2.0, January 2004
   - dtool: https://github.com/livMatS/dtool-lookup-gui/blob/master/data/icons/dtool_logo.svg
     License: CC-BY-SA

Run

    pdflatex abstract_dtool_dataset.tex
    
to build pdf and

    pdf2svg abstract_dtool_dataset.pdf abstract_dtool_dataset.svg
    
to convert to svg, then 

    convert -density 600 abstract_dtool_dataset.svg abstract_dtool_dataset.png
    
or

    inkscape -h 4096 abstract_dtool_dataset.svg -o abstract_dtool_dataset.png

to convert to png at 600 dpi or 4096 px height.
