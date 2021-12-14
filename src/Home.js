import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Icon, Header} from 'semantic-ui-react'

const headers = [
       {
        icon: "clipboard check",
        header: "Tech Checks",
        subheader: "Add, view, delete or edit Tech Cheks",
        link: "/techchecks"
       },
       {
        icon: "add user",
        header: "Students",
        subheader: "Add, view, delete or edit students",
        link: "/students"
       },
       {
        icon: "student",
        header: "Grades",
        subheader:"Add, view, delete or edit grades on Techchecks",
        link: "/scores"
      }
]


function Home() {
  
    return (
      <div>
          <Grid container text textAlign='center' verticalAlign='middle' columns={3} divided>
            <Grid.Row>
                {headers.map(h =>
                <Grid.Column divided>
                  <Link to={h.link}>
                 <Header as='h2' icon>
                   <Icon name={h.icon} />
                    {h.header}
                    <Header.Subheader>
                      {h.subheader}
                    </Header.Subheader>
                </Header>
                </Link>
                </Grid.Column>
                
                )}
            </Grid.Row>
          </Grid>
      </div>
    )
  }

  export default Home;