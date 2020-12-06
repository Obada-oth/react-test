1. What React components does your app have and what is the responsibility of each component?
   (_TIP: We've filled in the App component for you, add the rest of the components in a similar manner_)

`App` - Functions as the entry point for the whole application. Renders the app container component.

`Navbar` - Its porpuse is to allow user to toggle between the 2 pages we have in the app

`UserInput` \_ Displays input boxes for the user to allow changing the dataset and passes this new dataset to the charts components

`Radar` - Shows an img of a radar chart with the data values provided by the user in the UserInput component
`Bar` - Shows an img of a bars chart with the data values provided by the user in the UserInput component

2. Let's say your product owner asks you to define what you need to change to also validate that the user can only enter a number between 1 and 10. Write down (do NOT implement) in short steps what you would need to do.
   (_TIP: Write down if you would add a component or hook. Or what components need what alterations_)
   (_TIP: For example, if the new feature was to add an option to change the color of the radar graph it would be:_

- Create a color picker component
- Add the color picker component to the radar graph page
- Add a paremeter to the `getRadarChartUrl` to set the color
- Update the `getRadarChartUrl` function to pass the color to the API
  )
