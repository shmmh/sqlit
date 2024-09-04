import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { or, eq } from "drizzle-orm"
import { getUserFriendsById, getUserGroupsById } from "@/lib/db/user_crud"
import { friendships, users } from "@/lib/schema"
import { Avatar, Button, Input, User } from "@nextui-org/react"
import { revalidatePath } from "next/cache"
import React from "react"
import AddFriend from "./add-friend"
import AddGroup from "./add_group"

const Friends = async () => {
  const session = await auth()
  const userId = session?.user.id as string
  console.log(userId)
  const userGroups = await getUserGroupsById(userId)
  const userFriends = await getUserFriendsById(userId)
  console.log("usergroups/n", userGroups)
  console.log("userFriends/n", userFriends)
  return (
    <div className="flex flex-col gap-8">
      <div className="groups">
        {userGroups.length == 0 ? (
          <div>
            <div>You have No Groups</div>
            <AddGroup userId={userId} userFriends={userFriends} />
          </div>
        ) : (
          userGroups.map((group) => {
            return (
              <div key={group.id} className="flex flex-col gap-2">
                <h2>{group.name}</h2>
                <div className="group-container flex flex-row gap-2">
                  {group.members.map((member) => {
                    return (
                      <Avatar key={member.userId} name={member.user.name} />
                    )
                  })}
                </div>
              </div>
            )
          })
        )}
      </div>
      <AddGroup userId={userId} userFriends={userFriends} />
      <div className="friends">
        {userFriends.length == 0 ? (
          <div>
            <div>You have No Friends</div>
            <AddFriend userId={userId} />
          </div>
        ) : (
          <div className="flex flex-col justify-start items-center gap-2">
            {userFriends.map((friend) => {
              return (
                <div key={friend.friendId} className="user w-full">
                  <User
                    name={friend.friend.name}
                    description={friend.friend.username}
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
      <AddFriend userId={userId} />

      {/* <div className="friends">
        

        <div>
          <div>Add Friends</div>
        </div>

        <div className="flex gap-2">
          {userFriends.map((friend) => {
            return (
              <Avatar key={`${friend.friendId}`} name={friend.friend.name} />
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

export default Friends
