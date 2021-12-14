import {React, useState, useEffect} from 'react'
import {Dropdown, Grid, Table, Message } from 'semantic-ui-react'

function Scores() {
  const [activeAssociate, setAssociate] = useState("")
  const [scores, setScores] = useState([])
  const [source, setSource] = useState([])
  const handleChange = (e, { value }) => {
    setAssociate(value);
  }

  useEffect(
    fetch('https://cohort-backend-xkjo47y47q-uc.a.run.app/scores/')
        .then(response => response.json())
        .then(data => {
          setScores(data);
          const x = []
          data.map(y => {
            const s = {
              key: y.name,
              value: y.ldap,
              test: y.name
            }
            x.push(s)
          })
          setSource(x)  
    
        })
        ,[])

  return (
    <Grid container compact>
      <Grid.Row>
      <Grid.Column width={6}>
      <Message color="grey">
        <Message.Header>Select student from the dropdown below: </Message.Header>
        <span>
          Show me scores  for {' '}
          <Dropdown
            inline
            options={source}
            value={activeAssociate}
            onChange={handleChange}
          />
        </span>
      </Message>
      
        
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      
    
    {scores && scores
    .filter(score => score.ldap === activeAssociate)
    .map((record, index) => {
      return (
        record
          ? ( <Table collapsing celled>
          <Table.Header>
          <Table.Row>
              <Table.HeaderCell>Student</Table.HeaderCell>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Tech Check</Table.HeaderCell>
              <Table.HeaderCell>Score</Table.HeaderCell>
              <Table.HeaderCell>Updated By</Table.HeaderCell>
              <Table.HeaderCell>Last Updated</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
              <Table.Row as={index}>
            <Table.Cell>{record.ldap}</Table.Cell>
              <Table.Cell>{record.id}</Table.Cell>
              <Table.Cell>{record.tech_check}</Table.Cell>
              <Table.Cell>{record.score}</Table.Cell>
              <Table.Cell>{record.graded_by}</Table.Cell>
              <Table.Cell>{record.last_updated}</Table.Cell>
            </Table.Row>
            </Table.Body>
        </Table>)
          : (<Message>
          <Message.Header>No scores found</Message.Header>
        </Message>)
        
        
      );
    })}

    
      </Grid.Row>
    </Grid>
  )
}

export default Scores