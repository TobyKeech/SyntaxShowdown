import com.syntaxshowdown.syntaxshown.models.Attack;
import com.syntaxshowdown.syntaxshown.models.Defence;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import com.syntaxshowdown.syntaxshown.models.Character;

public class TestCharacter {

    Character html;
    Character java;
    Character postgress;

    Attack reduce;
    Attack rmrf;
    Attack gitPull;

    Defence gitPush;
    Defence filter;
    Defence map;

    @Before
    public void setUp(){

        html = new Character("html", "frontend", 100,"hi");
        java = new Character("java", "backend", 100, "test");
        postgress = new Character("postgress", "database", 100, "test");

        reduce = new Attack("gitPush", 50, html);
        rmrf = new Attack("gitPush", 25, java);
        gitPull = new Attack("gitPull", 10, postgress);

        gitPush = new Defence("gitPush", 20, html);
        filter = new Defence("gitPush", 20, java);
        map = new Defence("gitPush", 20, postgress);

    }

    @Test
    public void hasName(){
    assertEquals("html", html.getName());
    }

    @Test
    public void hasType(){
        assertEquals("frontend", html.getType());
    }

    @Test
    public void hasHp(){
        assertEquals(100, html.getHp());
    }

    @Test
    public void attackHasName(){
        assertEquals("gitPull", gitPull.getName());
    }

    @Test
    public void attackHasValue(){
        assertEquals(10, gitPull.getAttackvalue());
    }

    @Test
    public void defenceHasName(){
        assertEquals("gitPush", gitPush.getName());
    }

    @Test
    public void defenceHasValue(){
        assertEquals(20, gitPush.getDefencevalue());
    }

    @Test
    public void canAddAttack(){
       html.addAttack(gitPull);
       html.addAttack(reduce);
       html.addAttack(rmrf);
       assertEquals(3, html.getNoOfAttacks());
    }

    @Test
    public void canAddDefence(){
        html.addDefence(gitPush);
        html.addDefence(filter);
        html.addDefence(map);
        assertEquals(3, html.getNoOfDefences());
    }











}
