from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .model import ItemModel
from ..database.database import * 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5500", "http://127.0.0.1.5500", "http://localhost:5173"],  # Adjust the origin as necessary
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Debugging print to see if items are getting appended
@app.get("/", response_model=list[ItemModel])
async def get_items():
    return read()

@app.get("/{id}", response_model=ItemModel)
async def get_item_at_id(id: int):
    return find(id)

@app.post("/", response_model=ItemModel)
def create_item(item: ItemModel):
    return create(item)
    
@app.put("/{item_id}")
def update_item(item: ItemModel): 
    update(item)

@app.delete("/{item_id}", response_model=None)
def delete_item(item_id:int): 
    delete(item_id)

# item = ItemModel(name="Pushing Brian of a cliff", project_notes="Day 112", timer="39:21:05", progress=75, description="Almost there")
# create_item(item)
