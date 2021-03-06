import React from "react"
import { Box, Link, Text, Heading } from "rebass"
import { format } from "date-fns"

export const ArticleListing = ({
  path,
  context: {
    frontmatter: { title, description, date },
  },
}) => {
  if (!title && !description && !date) {
    return null
  }

  return (
    <Box mb={4}>
      <Link href={path}>
        <Heading>{title}</Heading>
      </Link>

      <Text fontSize={2}>{description}</Text>
      <Text>
        <small>
          <em>{format(new Date(date), "MMMM do, yyyy")}</em>
        </small>
      </Text>
    </Box>
  )
}
