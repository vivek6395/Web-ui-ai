import httpx

async def get_gpt_response(message: str) -> str:
    async with httpx.AsyncClient() as client:
        response = await client.post("http://localhost:11434/api/chat", json={
            "model": "llama3",
            "messages": [{"role": "user", "content": message}]
        })
        return response.json()["message"]["content"]
