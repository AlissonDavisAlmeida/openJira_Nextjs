import type { NextPage } from 'next'
import { Card, CardHeader, Grid } from '@mui/material'
import Layout from '../components/layouts/Layout'
import EntryList from '../components/ui/entry/EntryList'
import NewEntry from '../components/ui/entry/NewEntry'

const Home: NextPage = () => {

  return (
    <>
      <Layout title='Home - OpenJira'>
        <Grid container spacing={2} >

          <Grid item xs={12} sm={4} >
            <Card sx={
              {
                textAlign: "center",
                height: 'calc(100vh - 64px)',
                overflow:"scroll",
                '::-webkit-scrollbar': {
                  display: 'none'
                }
              }}>
              <CardHeader title="Pending" />
              <NewEntry />
              <EntryList status='pending' />
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} >
            <Card sx={
              {
                textAlign: "center",
                height: 'calc(100vh - 64px)',
                overflow:"scroll",
                '::-webkit-scrollbar': {
                  display: 'none'
                }
              }}>
              <CardHeader title="In Progress" />
              <EntryList status='in-progress' />

            </Card>
          </Grid>

          <Grid item xs={12} sm={4} >
            <Card sx={
              {
                textAlign: "center",
                height: 'calc(100vh - 64px)',
                overflow:"scroll",
                '::-webkit-scrollbar': {
                  display: 'none'
                }
              }}>
              <CardHeader title="Done" />
              <EntryList status='done' />

            </Card>
          </Grid>

        </Grid>
      </Layout>
    </>
  )
}

export default Home
