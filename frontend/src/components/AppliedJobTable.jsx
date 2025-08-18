import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Comapny</TableHead>
                <TableHead className="text-right">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                [1,2,3,4,5].map((item, index) => (
                    <TableRow>
                        <TableCell>17-07-2024</TableCell>
                        <TableCell>Full Stack Developer</TableCell>
                        <TableCell>Google</TableCell>
                        <TableCell className={"text-right"}><Badge>Selected</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
