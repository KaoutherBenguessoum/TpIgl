package test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Form {
	public static void remplirForm(WebDriver driver) throws InterruptedException
	{
		
	
	    // get the actual value of the title
		 String actualTitle = "";
	     actualTitle = driver.getTitle();
	
			    
			         
	    System.out.println(actualTitle);
	    
	  
		 Thread.sleep(2000);
        
		
        driver.findElement(By.id("Formu")).click();

        //Remplire formulaire------------------------------------

        driver.findElement(By.id("matricule")).sendKeys("135/25");   
        Thread.sleep(1000);
        driver.findElement(By.id("promo")).sendKeys("1");
        Thread.sleep(1000);
        driver.findElement(By.id("gpactuel")).sendKeys("4");
        Thread.sleep(1000);
        driver.findElement(By.id("grpvoulu")).sendKeys("5");
        Thread.sleep(1000);
        driver.findElement(By.id("why")).sendKeys("memories");
        //Envoyer formulaire-------------------------------------------------------
        Thread.sleep(3000);
        driver.findElement(By.id("send")).click();
        Thread.sleep(3000);
        
        
        
	}
	

}
