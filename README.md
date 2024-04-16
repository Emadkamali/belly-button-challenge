# belly-button-challenge

# Assignment Overview:

You're tasked with creating an interactive dashboard to explore the Belly Button Biodiversity dataset, which records the microbial communities present in human navels. The dataset shows that a few microbial species are common, while others are rare.

# Before Starting:
Create a new repository named "belly-button-challenge."
Clone the repository to your computer.
Copy the provided files from the StarterCode folder (index.html, samples.json, and the static folder) into your local repository.
Push these changes to GitHub.
Deploy the repository to GitHub Pages.

# Instructions:

- Use D3 library to read samples.json from this URL: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
- Create a horizontal bar chart with a dropdown menu to display the top 10 operational taxonomic units (OTUs) found in an individual's sample.
- Use sample_values for bar chart values.
- Use otu_ids as labels.
- Use otu_labels for hovertext.
  
# Create a bubble chart displaying each sample:
- Use otu_ids for x values.
- Use sample_values for y values and marker size.
- Use otu_ids for marker colors.
- Use otu_labels for text values.

# Display sample metadata (demographic information):
- Show each key-value pair from the metadata JSON object on the page.
- Update all plots when a new sample is selected.
- Deploy the app to a static page hosting service like GitHub Pages.

Ensure your repository has regular commits and a comprehensive README.md file.
