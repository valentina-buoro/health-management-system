"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table'
import { Button } from '../../../components/ui/button' // Assuming you have a Button component
import CreateCustomer from './add-new-user/page'

const Page = () => {
  const URL = "https://pharmacy-inventory-system-1vnk.onrender.com"
  const [users, setUsers] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/api/user/customers`)
        setUsers(response.data.users)
      } catch (error) {
        console.error("Error fetching users:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleAddUser = () => {
    // Implement the logic to add a new user
    setShowModal(true)
    console.log("Add new user clicked")
    // You might want to open a modal or navigate to a new page here
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">User Accounts</h1>
        <Button onClick={handleAddUser}>Add New User</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user:any) => (
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CreateCustomer open = {showModal} handleClose={()=>setShowModal(false)}/>
    </div>
  )
}

export default Page