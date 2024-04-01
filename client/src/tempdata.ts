export const userData = {
    id: "userid1",
    firstname: "Jay",
    lastname: "bhensdadia",
    chats: [
        {
            id: "chat1",
            name: "Vijay Patel",
            members: [
                "userid1",
                "userid2"
            ],
            messages: [
                {
                    id: "msg1",
                    sender: "userid1",
                    chatId: "chat1",
                    content: "hi there"
                },
                {
                    id: "msg2",
                    sender: "userid2",
                    chatId: "chat1",
                    content: "hello, how are you how have you been... long time huh...."
                },
                {
                    id: "msg3",
                    sender: "userid1",
                    chatId: "chat1",
                    content: "wassup?"
                }
            ]
        }
    ]

}

export interface Message {
    id: string;
    sender: string;
    chatId: string;
    content: string;
}