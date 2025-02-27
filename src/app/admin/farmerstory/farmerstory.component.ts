import { Component, OnInit } from '@angular/core';
import { FarmerStory } from 'src/model/FarmerStory';
import { FarmerStoryService } from '../services/farmer-story.service';

@Component({
  selector: 'app-farmerstory',
  templateUrl: './farmerstory.component.html',
  styleUrls: ['./farmerstory.component.scss']
})
export class FarmerstoryComponent implements OnInit {
  stories: FarmerStory[] = [];
  newStory: FarmerStory = { storyTitle: '', storyDetails: '', imageUrl: '', struggles: '' };
  selectedStory: FarmerStory | null = null;

  constructor(private farmerStoryService: FarmerStoryService) {}

  ngOnInit(): void {
    this.loadStories();
  }

  loadStories(): void {
    this.farmerStoryService.getStories().subscribe(
      (data) => {
        this.stories = data;
      },
      (error) => {
        console.error('Error loading stories:', error);
      }
    );
  }

  addStory(): void {
    this.farmerStoryService.addStory(this.newStory).subscribe(
      () => {
        this.newStory = { storyTitle: '', storyDetails: '', imageUrl: '', struggles: '' }; // Clear form
        this.loadStories(); // Refresh the list
      },
      (error) => {
        console.error('Error adding story:', error);
        alert('Failed to add story. Please try again.');
      }
    );
  }

  openFullDetails(story: FarmerStory): void {
    this.selectedStory = story; // Open modal with full details
  }

  closeModal(): void {
    this.selectedStory = null; // Close modal
  }

  deleteStory(id: number): void {
    this.farmerStoryService.deleteStory(id).subscribe(
      () => {
        this.loadStories(); // Refresh the list
      },
      (error) => {
        console.error('Error deleting story:', error);
        alert('Failed to delete story. Please try again.');
      }
    );
  }
}
