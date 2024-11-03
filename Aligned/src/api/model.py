from pydantic import BaseModel
from typing import Optional

class ItemModel(BaseModel):
    """Class representing each project item."""
    id:Optional[int] = None
    name:str
    project_notes:str
    timer:str
    progress:int
    description:str

