import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import useSuggestedUsers from "../../hooks/useSuggestedUsers"

const SuggestedUsers = () => {

  const {isLoading, suggestedUsers} = useSuggestedUsers()
  if (isLoading) return null


  return <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        {suggestedUsers.length !== 0 && (<Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested for you</Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>See all</Text>
        </Flex>)}

       {suggestedUsers.map((user) => (
         <SuggestedUser user ={user} key={user.id} />
       ))}

        <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>@ 2025 Built by EU</Box>
  </VStack>
    
  
}

export default SuggestedUsers