import React, { useEffect, useState } from 'react'
import { Grid, Card, Image, Button} from 'semantic-ui-react'


function Students() {
    const [students, setStudents] = useState([])
    useEffect(
        fetch('https://cohort-backend-xkjo47y47q-uc.a.run.app/users/')
            .then(response => response.json())
            .then(data => setStudents(data))
            ,[])
  
    return (
      <div>
          <Grid container text textAlign='left' verticalAlign='middle' columns={3} divided>
            <Grid.Row>
                <Card.Group>
                {students.map(student =>
                    <Card>
                    <Card.Content>
                      <Image
                        floated='right'
                        size='mini'
                        src='/images/profile.png'
                      />
                      <Card.Header>{student.name}</Card.Header>
                      <Card.Meta>{student.ldap}</Card.Meta>
                      <Card.Description>
                        <strong>{student.email}</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className='ui two buttons'>
                        <Button basic color='green'>
                          Update
                        </Button>
                        <Button basic color='red'>
                          Delete
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                )}
                </Card.Group>
            </Grid.Row>
          </Grid>
      </div>
    )
  }

  export default Students;